import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';

// Channel-specific Components
import {Container, CodecOutline, ArrowLeft, ArrowRight, GdqText} from './components/StaticComponents';
import {DonationBlock} from './components/DonationComponents';
import {VolumeBlock, VolumeBarCollection} from './components/VolumeComponents';
import {Portrait} from './components/PortraitComponents';

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
				<DonationBlock value={total?.raw ?? 0}/>
				<VolumeBlock>
					<VolumeBarCollection barsData={volumeBarPathData} volumeLevel={5}/>
				</VolumeBlock>
				<Portrait side='left' character='otacon'/>
				<Portrait side='right' character='snake'/>
			</CodecOutline>
		</Container>
	);
}