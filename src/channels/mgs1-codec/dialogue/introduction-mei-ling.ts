import { Mgs1CodecInstruction } from './dialogue-types';
export const conversation: Mgs1CodecInstruction[] = [
    {
        delayMs: 0,
        content: {
            type: 'portraitSet',
            position: 'left',
            character: 'mei-ling',
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
            position: 'right',
            text: 'Mei Ling, didn\'t you once tell me that you played video games?',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Mostly fighting games, but yes.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Why do you ask?',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Dr. Emmerich signed me up for this GDQ thing.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Do you have any idea what it\'s about?',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'The charity thing?  Yeah, that\'s so cool!',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Solid Snake, the gamer.  I never would have expected.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'What are you playing?',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Me?  I\'m not playing anything.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Oh, are you on the couch then?',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Not exactly.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'I\'m doing this sort of ... talking thing ... in between games',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Ohhh, so you must be a host then.',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Host, huh?  No one\'s said that to me, but I\'ll take your word for it.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Well, either way, just be yourself.  I know you can do this Snake!',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'This will be easy compared to what I\'ve seen you do.',
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
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Thanks Mei Ling.  That helps.',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'Do you have any proverbs for me ... for old time\'s sake?',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'Hmmmm ... how about ...',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'left',
            text: 'GDQ HYPE!!!',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'left',
        },
    },
    // todo collapse left portrait
    // todo ellipses without mouth moving
    {
        delayMs: 2000,
        content: {
            type: 'talkStart',
            position: 'right',
            text: 'That\'s a weird proverb ...',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'talkStop',
            position: 'right',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'portraitDeactivate',
        },
    },
    {
        delayMs: 2000,
        content: {
            type: 'endConversation',
        },
    },
]