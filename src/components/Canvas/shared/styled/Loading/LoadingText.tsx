import styled from "styled-components";

const LoadingText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    width: 120px;
    height: 1px;
`

LoadingText.displayName = "LoadingText"

export default LoadingText;