import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';
import { useEffect, useRef, useState } from 'react';

import { useListenFor, useReplicant } from 'use-nodecg';

// Channel-specific Components
import {Container, CodecOutline, ArrowLeft, ArrowRight, GdqText} from './components/StaticComponents';
import {DonationBlock} from './components/DonationComponents';
import {VolumeBlock, VolumeBarCollection} from './components/VolumeComponents';
import {Portrait} from './components/PortraitComponents';

registerChannel('MGS1 Codec', 141, Mgs1Codec, {
	position: 'bottomLeft',
	site: 'GitHub',
	handle: 'oneirocosm',
});

function Mgs1Codec(props: ChannelProps) {
	const [total] = useReplicant<Total | null>('total', null);
	const [leftCharacter, setLeftCharacter] = useState('otacon');
	const [leftCommand, setLeftCommand] = useState('closed');
	const [donoCount, setDonoCount] = useState(0);

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */
		setDonoCount((donoCount) => donoCount + 1);
	});

	useEffect(() => {
		if (donoCount % 2 == 0) {
			setLeftCommand('');
		} else {
			setLeftCommand('talk');
		}
	}, [donoCount]);

	return (
		<Container>
			<CodecOutline>
				<GdqText>GDQ</GdqText>
				<ArrowLeft>&#9664;</ArrowLeft>
				<ArrowRight>&#9654;</ArrowRight>
				<DonationBlock value={total?.raw ?? 0}/>
				<VolumeBlock>
					<VolumeBarCollection volumeLevel={5}/>
				</VolumeBlock>
				<Portrait side='left' character={leftCharacter} command={leftCommand}/>
				<Portrait side='right' character='snake' command=''/>
			</CodecOutline>
		</Container>
	);
}