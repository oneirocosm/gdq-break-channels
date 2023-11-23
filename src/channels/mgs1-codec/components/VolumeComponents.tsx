import styled from '@emotion/styled';

import { volumeBarPathData } from '../assets/volume-bar-path-data';

interface VolumeBarCollectionProps {
	volumeLevel: number;
}

export const VolumeBlock = styled.div`
	position: absolute;
	top: 60px;
	left: 364px;
	width: 364px;
	height: 142px;
`;

export const VolumeBarCollection = (props: VolumeBarCollectionProps) => {
	return (
		<svg width='100%'
			height='100%'
			viewBox='14 0 1036 610'
			preserveAspectRatio='none'
			xmlns="http://www.w3.org/2000/svg">
			<filter id="volumeBlur">
				<feGaussianBlur stdDeviation="3" />
			</filter>
			{volumeBarPathData.map((bar, i) => VolumeBar(bar, i, props.volumeLevel))}
		</svg>
	)
}

const VolumeBar = (path: string, barIndex: number, volumeLevel: number) => {
	return (
		<path
			vectorEffect='non-scaling-stroke'
			d={path}
			fill={barIndex < volumeLevel ? '#6a9b89' : '#223a2e'}
			stroke='none'
			filter='url(#volumeBlur)'
		/>
	)
}