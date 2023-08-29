import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import spriteSheet from '../assets/mgs1-codec-portraits.png';

type Dictionary<T> = { [index: string]: T};

interface PortraitProps {
    side: string;
    character: string;
}

const positionsX: Dictionary<string> = {
    'left': '28px',
    'right': '848px',
}

const characterSpriteX: Dictionary<number> = {
    'snake': 36,
    'otacon': 726,
    'meryl': 1986,
    'campbell': 386,
    'naomi': 726,
    'mei ling': 1296,
}

const characterSpriteY: Dictionary<number> = {
    'snake': 174,
    'otacon': 1534,
    'meryl': 904,
    'campbell': 44,
    'naomi': 44,
    'mei ling': 44,
}

export function Portrait(props: PortraitProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const fullSpriteX = characterSpriteX[props.character];
    const fullSpriteY = characterSpriteY[props.character];
    const fullSpriteWidth = 52;
    const fullSpriteHeight = 89;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d');

        const image = new Image();
        image.src = spriteSheet;

        image.onload = () => {
            context?.drawImage(image, fullSpriteX, fullSpriteY, fullSpriteWidth, fullSpriteHeight, 0, 0, 212, 320);
        }
    })

    return (
        <div style={{
            position: 'absolute',
            left: `${positionsX[props.side]}`,
            top: '0',
            width: '212px',
            height: '320px',
            transform: 'scaleY(1.0)',
        }}>
            <canvas ref={canvasRef}
            width='212px'
            height='320px'
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
            }}>
            </canvas>
            <div
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                boxShadow: 'inset 0px -1px 4px 4px #233d2b, 0 -1px 10px 6px #233d2b',
            }}>
            </div>
        </div>
    )
}

export const Portrait2 = styled.canvas<{side: string}>`
    position: absolute;
    top: {};
    left: ${({side}) => positionsX[side]};
    width: 212px;
    height {};
`;