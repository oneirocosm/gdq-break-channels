export type Mgs1CodecInstruction = {
    delayMs: number;
    content: Mgs1CodecAction;
}

export type Mgs1CodecAction =
    | {
        type: 'talkStart',
        position: 'left' | 'right',
        text: string,
    }
    | {
        type: 'talkStop',
        position: 'left' | 'right',
    }
    | {
        type: 'portraitSet',
        position: 'left' | 'right',
        character: string,
    }
    | {
        type: 'portraitActivate',
    }
    | {
        type: 'portraitDeactivate',
    }
    | {
        type: 'endConversation',
    }