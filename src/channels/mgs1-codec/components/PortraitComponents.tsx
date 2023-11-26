import styled from '@emotion/styled';
import { useEffect, useRef, useState, useCallback } from 'react';

import spriteSheet from '../assets/mgs1-codec-portraits.png';

type Dictionary<T> = { [index: string]: T };

interface PortraitProps {
    side: string;
    character: string;
    command: string;
}

const SRC_SPRITE_WIDTH = 52;
const SRC_SPRITE_HEIGHT = 89;
const SRC_GUTTER_WIDTH = 8;
const SRC_GUTTER_HEIGHT = 11;
const DST_SPRITE_WIDTH = 212;
const DST_SPRITE_HEIGHT = 320;

const positionsX: Dictionary<string> = {
    'left': '28px',
    'right': '848px',
};

const characterSpriteX: Dictionary<number> = {
    'snake': 36,
    'otacon': 726,
    'meryl': 1986,
    'campbell': 386,
    'naomi': 726,
    'mei-ling': 1296,
};

const characterSpriteY: Dictionary<number> = {
    'snake': 174,
    'otacon': 1534,
    'meryl': 904,
    'campbell': 44,
    'naomi': 44,
    'mei-ling': 44,
};

const SPRITE_ACTION_ENUM: Dictionary<number> = {
    'normal': 0,
    'eyes-half': 1,
    'eyes-open': 2,
    'mouth-open': 3,
    'mouth-half': 4,
};

interface ActivationParams {
    scale: string,
    delay: string,
}


export function Portrait(props: PortraitProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [actionFrame, setActionFrame] = useState('normal');
    const [scaleParams, setScaleParams] = useState<ActivationParams>({ scale: '0.0', delay: '0.25s' });

    const drawSprite = useCallback(async () => {
        const fullSpriteX = characterSpriteX[props.character];
        const fullSpriteY = characterSpriteY[props.character];
        const offsetX = SPRITE_ACTION_ENUM[actionFrame] * (SRC_SPRITE_WIDTH + SRC_GUTTER_WIDTH);

        const spriteX = fullSpriteX + offsetX;

        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d');

        const image = new Image();
        image.addEventListener('load', () => {
            context?.drawImage(
                image,
                spriteX, fullSpriteY,
                SRC_SPRITE_WIDTH, SRC_SPRITE_HEIGHT,
                0, 0,
                DST_SPRITE_WIDTH, DST_SPRITE_HEIGHT,
            );
        });
        image.src = spriteSheet;
    }, [props.character, actionFrame]);


    useEffect(() => {
        drawSprite()
    }, [drawSprite])


    useEffect(() => {

        const talkSequence = function (timeouts: ReturnType<typeof setTimeout>[]) {
            setActionFrame('mouth-half');
            timeouts.push(setTimeout(() => { setActionFrame('mouth-open') }, 50));
            timeouts.push(setTimeout(() => { setActionFrame('mouth-half') }, 150));
            timeouts.push(setTimeout(() => { setActionFrame('normal') }, 200));
        };
        let interval: ReturnType<typeof setInterval>;
        let timeouts: ReturnType<typeof setTimeout>[] = [];

        switch (props.command) {
            case 'activate':
                setScaleParams({ scale: '1.0', delay: '0.25s' })
                break;
            case 'deactivate':
                setScaleParams({ scale: '0.0', delay: '0s' })
                break;
            case 'talk':
                interval = setInterval(function () {
                    talkSequence(timeouts);
                }, 300);
            default:
                setActionFrame('normal');
        }

        return () => {
            for (const timeout of timeouts) {
                clearTimeout(timeout);
            }
            clearInterval(interval);
        }
    }, [props.command])


    return (
        <div style={{
            position: 'absolute',
            left: `${positionsX[props.side]}`,
            top: '0',
            width: '212px',
            height: '320px',
            transition: `transform 0.25s ease-out ${scaleParams.delay}`,
            transform: `scaleY(${scaleParams.scale})`,
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