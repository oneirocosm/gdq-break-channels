
import { Mgs1CodecAction, Mgs1CodecInstruction } from '../index';
export const conversation: Mgs1CodecInstruction[] = [
    {
        delayMs: 0,
        content: {
            type: 'portraitSet',
            position: 'left',
            character: 'otacon',
        },
    },
    {
        delayMs: 0,
        content: {
            type: 'portraitSet',
            position: 'right',
            character: 'snake',
        },
    },
    {
        delayMs: 5000,
        content: {
            type: 'portraitActivate',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Alright Snake. You\'re up',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'left',
        },
    },
    {
        delayMs: 1000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Otacon, why do I have to do this? I\'m a soldier, not a speaker!',
        },
    },
    {
        delayMs: 5000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 1000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Come on Snake, the people love you! Besides this is what Philathropy is all about.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'left',
        },
    },
    {
        delayMs: 1000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Fine, but don\'t expect me to be happy about it.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
]