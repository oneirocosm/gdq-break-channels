import styled from '@emotion/styled';
import codecOutlineImage from '../assets/codec-outline-image.png';

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
`;

export const CodecOutline = styled.div`
	postion: absolute;
	width: 1084px;
	height: 320px;
	background-image: url('${codecOutlineImage}');
	transform: translate(2px, 6px);
`;

export const ArrowLeft = styled.div`
	position: absolute;
	top: 121px;
	left: 289px;
	font-size: 20px;
	color: #253c36;
`;

export const ArrowRight = styled.div`
	position: absolute;
	top: 121px;
	left: 782px;
	font-size: 20px;
	color: #253c36;
`;

export const GdqText = styled.div`
	position: absolute;
	top: 2px;
	left: 522px;
	font-family: gdqpixel;
	font-size: 20px;
	color: #253c36;
`;