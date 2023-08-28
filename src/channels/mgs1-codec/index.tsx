import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import codecOutlineImage from './codec-outline-image.png';
import {volumeBarPathData} from './volume-bar-path-data';

interface VolumeBarCollectionProps {
	barsData: string[];
	volumeLevel: number;
}

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

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
`;

const CodecOutline = styled.div`
	postion: absolute;
	width: 1084px;
	height: 320px;
	background-image: url('${codecOutlineImage}');
	transform: translate(2px, 6px);
`;

const ArrowLeft = styled.div`
	position: absolute;
	top: 121px;
	left: 289px;
	font-size: 20px;
	color: #253c36;
`;

const ArrowRight = styled.div`
	position: absolute;
	top: 121px;
	left: 782px;
	font-size: 20px;
	color: #253c36;
`;

const GdqText = styled.div`
	position: absolute;
	top: 2px;
	left: 522px;
	font-family: gdqpixel;
	font-size: 20px;
	color: #253c36;
`;

const DonationBlock = styled.div`
	position: absolute;
	top: 144px;
	left: 468px;
`;

const DonationDigits = styled.span<{isLight: boolean, isBig: boolean}>`
	position: relative;
	font-family: DSEG7ClassicMini;
	font-size: 40px;
	font-size: ${({ isBig }) => isBig ? '40px' : '30px'};
	font-weight: bold;
	color: #253c36;
	color: ${({ isLight }) => isLight ? '#77988c' : '#253c36'};
`;

const VolumeBlock = styled.div`
	position: absolute;
	top: 60px;
	left: 364px;
	width: 364px;
	height: 142px;
`;

const VolumeBarCollection = (props: VolumeBarCollectionProps) => {
	return (
		<svg width='100%'
		height='100%'
		viewBox='14 0 1036 610'
		preserveAspectRatio= 'none'
		xmlns="http://www.w3.org/2000/svg">
		<filter id="volumeBlur">
			<feGaussianBlur stdDeviation="3" />
				</filter>
			{props.barsData.map((bar, i) => VolumeBar(bar, i, props.volumeLevel))}
		</svg>
	)
}

const VolumeBar = (path: string, barIndex: number, volumeLevel: number) => {
	return (
		<path
		vectorEffect= 'non-scaling-stroke'
		d= {path}
		fill= {barIndex < volumeLevel ?  '#6a9b89' :'#223a2e' }
		stroke= 'none'
		filter='url(#volumeBlur)'
		/>
	)
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
