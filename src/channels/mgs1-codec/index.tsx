import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import TweenNumber from '@gdq/lib/components/TweenNumber';

// Channel-specific Components
import {Container, CodecOutline, ArrowLeft, ArrowRight, GdqText} from './components/StaticComponents';
import {DonationBlock, DonationDigits} from './components/DonationComponents';
import {VolumeBlock, VolumeBarCollection} from './components/VolumeComponents';

// Channel-specific Assets
import {volumeBarPathData} from './assets/volume-bar-path-data';

registerChannel('MGS1 Codec', 141, Mgs1Codec, {
	position: 'bottomLeft',
	site: 'GitHub',
	handle: 'oneirocosm',
});

function Mgs1Codec(props: ChannelProps) {
	const [total] = useReplicant<Total | null>('total', null);

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */
	});

	return (
		<Container>
			<CodecOutline>
				<GdqText>GDQ</GdqText>
				<ArrowLeft>&#9664;</ArrowLeft>
				<ArrowRight>&#9654;</ArrowRight>
				<DonationBlock>
					<DonationDigits isLight={false} isBig={false}>88</DonationDigits>
					<DonationDigits isLight={false} isBig={true}>.888.888</DonationDigits>
				</DonationBlock>
				<DonationBlock>
					<DonationDigits isLight={true} isBig={false}>!!</DonationDigits>
					<DonationDigits isLight={true} isBig={true}>!!1.234</DonationDigits>
				</DonationBlock>
				<VolumeBlock>
					<VolumeBarCollection barsData={volumeBarPathData} volumeLevel={5}/>
				</VolumeBlock>
			</CodecOutline>
			<TotalEl>
				$<TweenNumber value={Math.floor(total?.raw ?? 0)} />
			</TotalEl>
		</Container>
	);
}

const TotalEl = styled.div`
	font-family: gdqpixel;
	font-size: 46px;
	color: white;

	position: absolute;

	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;
