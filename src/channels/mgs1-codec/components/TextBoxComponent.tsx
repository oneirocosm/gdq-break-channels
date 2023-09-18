import styled from '@emotion/styled';

const OuterWrapper = styled.div`
    font-family: sans-serif;
    font-size: 20px;
    color: white;
    position: absolute;
    left: 290px;
    top: 230px;
    width: 510px;
`;

const InnerWrapper = styled.div`
    text-align: left;
    margin: 0 auto;
    width: max-content;
    max-width: 100%;
`;


interface TextBoxProps {
    text: string;
};

export function Mgs1CodecTextBox(props: TextBoxProps) {
    return (
        <OuterWrapper>
            <InnerWrapper>
                {props.text}
            </InnerWrapper>
        </OuterWrapper>
    )
}