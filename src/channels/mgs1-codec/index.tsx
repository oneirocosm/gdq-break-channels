import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import codecOutlineImage from './codec-outline-image.png';

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
`
const ArrowRight = styled.div`
	position: absolute;
	top: 121px;
	left: 782px;
	font-size: 20px;
	color: #253c36;
`
const DonationBlock = styled.div`
	position: absolute;
	top: 144px;
	left: 468px;
`
const DonationDigits = styled.span<{isLight: boolean, isBig: boolean}>`
	position: relative;
	font-family: DSEG7ClassicMini;
	font-size: 40px;
	font-size: ${({ isBig }) => isBig ? '40px' : '30px'};
	font-weight: bold;
	color: #253c36;
	color: ${({ isLight }) => isLight ? '#77988c' : '#253c36'};
`
const GdqText = styled.div`
	position: absolute;
	top: 2px;
	left: 522px;
	font-family: gdqpixel;
	font-size: 20px;
	color: #253c36;
`;

const TotalEl = styled.div`
	font-family: gdqpixel;
	font-size: 46px;
	color: white;

	position: absolute;

	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;
