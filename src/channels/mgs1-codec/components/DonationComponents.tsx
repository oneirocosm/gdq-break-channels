import styled from '@emotion/styled';
import { useIncrementNumber } from '@gdq/lib/hooks/useIncrementNumber';

interface DonationProps {
    value?: number,
    fps?: number
}

const DonationDigits = styled.span<{isLight: boolean, isBig: boolean}>`
	position: relative;
    padding-right: 2px;
	font-family: DSEG7ClassicMini;
	font-size: 40px;
	font-size: ${({ isBig }) => isBig ? '40px' : '30px'};
	font-weight: bold;
	color: #253c36;
	color: ${({ isLight }) => isLight ? '#77988c' : '#253c36'};
`;

const DonationGroup = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

export function DonationBlock(props: DonationProps) {
    const total = useIncrementNumber(props.value ?? 0, props.fps)

    return (
        <div
        style={{
	        position: 'absolute',
	        top: '144px',
	        left: '468px',
        }}>
            <DonationGroup>
                <DonationDigits isBig={false} isLight={false}>88</DonationDigits>
                <DonationDigits isBig={true} isLight={false}>.888.888</DonationDigits>
            </DonationGroup>
            <DonationGroup>
                <DonationDigits isBig={false} isLight={true}>{getMillionsRepr(total)}</DonationDigits>
                <DonationDigits isBig={true} isLight={true}>{getSubMillionsRepr(total)}</DonationDigits>
            </DonationGroup>
        </div>
    )
}

function getMillionsRepr(total: number): string {
    const millionsNum = Math.floor(total / 1000000);

    if (millionsNum == 0) {
        return '!!';
    }
    return millionsNum.toString().padStart(2, '!');
}

function getSubMillionsRepr(total: number): string {
    const numDigits = Math.log10(total);

    let padChar = '!';
    if (numDigits > 6) {
        padChar = '0';
    }

    let subMillions = Math.floor(total % 1000000).toString().padStart(6, padChar);
    
    if (numDigits > 3) {
        subMillions = splice(subMillions, '.', 3);
    }

    if (numDigits > 6) {
        subMillions = splice(subMillions, '.', 0);
    }

    return subMillions;
}

function splice(base: string, str: string, idx: number) {
    return base.slice(0, idx) + str + base.slice(idx);
};