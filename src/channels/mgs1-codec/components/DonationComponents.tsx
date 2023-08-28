import styled from '@emotion/styled';

export const DonationBlock = styled.div`
	position: absolute;
	top: 144px;
	left: 468px;
`;

export const DonationDigits = styled.span<{isLight: boolean, isBig: boolean}>`
	position: relative;
	font-family: DSEG7ClassicMini;
	font-size: 40px;
	font-size: ${({ isBig }) => isBig ? '40px' : '30px'};
	font-weight: bold;
	color: #253c36;
	color: ${({ isLight }) => isLight ? '#77988c' : '#253c36'};
`;