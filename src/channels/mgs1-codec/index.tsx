import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';
import { useEffect, useState, useReducer } from 'react';

import { useListenFor, useReplicant } from 'use-nodecg';

// Channel-specific Components
import { Container, CodecOutline, ArrowLeft, ArrowRight, GdqText } from './components/StaticComponents';
import { DonationBlock } from './components/DonationComponents';
import { VolumeBlock, VolumeBarCollection } from './components/VolumeComponents';
import { Portrait } from './components/PortraitComponents';
import { MovingBrackets } from './components/MovingBracketsComponents';
import { Mgs1CodecTextBox } from './components/TextBoxComponent';
import { Mgs1CodecAction, Mgs1CodecInstruction } from './dialogue/dialogue-types';

import { conversations as conversationsInit } from './dialogue/dialogue';

function shiftConversation(conversations: Mgs1CodecInstruction[][]) {
	let next = conversations.shift();
	if (!next) {
		console.log('Error, no conversations remain');
		return;
	}
	const conversation = JSON.parse(JSON.stringify(next)); // deep copy
	conversations.push(next);
	return conversation;
}

registerChannel('MGS1 Codec', 141, Mgs1Codec, {
	position: 'bottomLeft',
	site: 'GitHub',
	handle: 'oneirocosm',
});

interface MGS1CodecState {
	character: {
		left: string;
		right: string;
	};
	action: {
		left: string;
		right: string;
	};
	bracketCommand: string;
	currentLine: string;
	conversations: Array<Array<Mgs1CodecInstruction>>;
	conversation: Array<Mgs1CodecInstruction>;
}


function reducer(state: MGS1CodecState, action: Mgs1CodecAction) {
	switch (action.type) {
		case 'talkStart':
			return {
				...state,
				action: {
					...state.action,
					[action.position]: 'talk'
				},
				currentLine: action.text,
			}
		case 'talkStop':
			return {
				...state,
				action: {
					...state.action,
					[action.position]: ''
				},
				currentLine: '',
			}
		case 'portraitSet':
			return {
				...state,
				character: {
					...state.character,
					[action.position]: action.character,
				},
			}
		case 'portraitActivate':
			return {
				...state,
				action: {
					...state.action,
					left: 'activate',
					right: 'activate',
				},
				bracketCommand: 'activate',
			}
		case 'portraitDeactivate':
			return {
				...state,
				action: {
					...state.action,
					left: 'deactivate',
					right: 'deactivate',
				},
				bracketCommand: 'deactivate',
			}
		case 'endConversation':
			// doing this separate from deactivating a portrait ensures the
			// wrong character portrait doesn't display during the closing animation
			const newConversation = shiftConversation(state.conversations);
			return {
				...state,
				conversation: newConversation,
			}
		default:
			// do nothing
			break;
	}
	return state;
}


const mgs1CodecStateInit: MGS1CodecState = {
	character: { left: '', right: '' },
	action: { left: '', right: '' },
	bracketCommand: 'deactivate',
	currentLine: '',
	conversations: JSON.parse(JSON.stringify(conversationsInit)),
	conversation: [],
}

function mgs1CodecInitializer(mgs1CodecState: MGS1CodecState) {
	mgs1CodecState = mgs1CodecStateInit;
	mgs1CodecState.conversation = shiftConversation(mgs1CodecState.conversations);
	return mgs1CodecState
}

function Mgs1Codec(props: ChannelProps) {
	const [total] = useReplicant<Total | null>('total', null);
	const [donoCount, setDonoCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, mgs1CodecStateInit, mgs1CodecInitializer);

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */
		setDonoCount((donoCount) => donoCount + 1);
	});

	useEffect(() => {
		const nextInstruction = state.conversation.shift();
		if (!nextInstruction) {
			return
		}
		let timeout = setTimeout(() => dispatch(nextInstruction.content), nextInstruction.delayMs);
		return () => {
			clearTimeout(timeout);
		}

	}, [state]);

	useEffect(() => {
		// TODO
	}, [donoCount]);

	return (
		<Container>
			<CodecOutline>
				<GdqText>GDQ</GdqText>
				<ArrowLeft>&#9664;</ArrowLeft>
				<ArrowRight>&#9654;</ArrowRight>
				<MovingBrackets command={state.bracketCommand} />
				<DonationBlock value={total?.raw ?? 0} />
				<VolumeBlock>
					<VolumeBarCollection volumeLevel={5} />
				</VolumeBlock>
				<Portrait side='left' character={state.character.left} command={state.action.left} />
				<Portrait side='right' character={state.character.right} command={state.action.right} />
				<Mgs1CodecTextBox text={state.currentLine} />
			</CodecOutline>
		</Container>
	);
}