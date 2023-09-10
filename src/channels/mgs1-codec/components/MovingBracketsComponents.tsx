import styled from '@emotion/styled';

const borderStyle = '4px solid #0B1512';
//const borderStyle = '5px solid red';

type Dictionary<T> = { [index: string]: T};

const BRACKET_SCALES: Dictionary<number> = {
    activate: 1.0,
    deactivate: 0.56,
};

const BRACKET_DELAYS: Dictionary<number> = {
    activate: 0.0,
    deactivate: 0.25,
};

const LeftBracket = styled.div`
    border-top: ${borderStyle};
    border-bottom: ${borderStyle};
    border-left: ${borderStyle};
    float: left;
    width: 20px;
    height: 100%;
    position: relative;
`;

const RightBracket = styled.div`
    border-top: ${borderStyle};
    border-bottom: ${borderStyle};
    border-right: ${borderStyle};
    float: right;
    width: 20px;
    height: 100%;
`;

/*
export const MovingBrackets2 = styled.div<{ command: string}>`
    ${LeftBracket}
    ${RightBracket}
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s linear;
    transform: scaleX(${({command}) => BRACKET_SCALES[command]})
`;
*/

interface MovingBracketsProps {
    command: string;
}

export function MovingBrackets(props: MovingBracketsProps) {

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '97.3%',
            transform: `scaleX(${BRACKET_SCALES[props.command]})`,
            transition: `transform 0.25s ease-out ${BRACKET_DELAYS[props.command]}s`,
            top: '1px',
            //transform: `scaleX(0.56)`,
        }}>
            <LeftBracket></LeftBracket>
            <RightBracket/>
        </div>
    )
}