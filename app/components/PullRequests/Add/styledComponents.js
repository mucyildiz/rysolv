import styled from 'styled-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {
  ErrorSuccessBanner,
  PrimaryAsyncButton,
  SecondaryButton,
} from 'components/base_ui';
import {
  defaultFontSize,
  dividerBorder,
  successGreen,
  textColor,
} from 'defaultStyleHelper';

export const ButtonGroup = styled.div`
  text-align: right;
`;

export const Checkbox = styled.div`
  svg {
    background: ${({ hasError }) => (hasError ? '#31b589' : '#c62838')};
    border-radius: 0.2rem;
    color: white;
    display: flex;
    font-size: ${defaultFontSize};
  }
`;

export const Divider = styled.div`
  border-top: ${dividerBorder};
  margin: 0.5rem auto;
  width: 100%;
`;

export const ImportFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImportUrlLabel = styled.div`
  padding-right: 1rem;
  width: 12.5rem;
`;

export const ImportUrlWrapper = styled.div`
  color: #6a737d;
  display: flex;
  flex-direction: column;
  font-size: ${defaultFontSize};
  padding: 2rem;
`;

export const PullRequestContainer = styled.div`
  width: 90%;
`;

export const PullRequestInfo = styled.div`
  padding: 0 1rem;
`;

export const PullNumberWrapper = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

export const StatusWrapper = styled.span`
  text-transform: capitalize;
`;

export const StyledFormHelperText = styled(FormHelperText)`
  font-size: 1.2rem;
`;

export const StyledHeader = styled.h1`
  color: ${({ isSuccess }) => (isSuccess ? successGreen : textColor)};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
  min-width: 40rem;
  padding: 1rem 0;
  text-align: left;
`;

export const StyledItem = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: ${textColor};
`;

export const StyledErrorSuccessBanner = styled(ErrorSuccessBanner)`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.div`
  align-self: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.2rem;
  font-weight: 400;
  min-width: 10rem;
`;

export const StyledPrimaryAsyncButton = styled(PrimaryAsyncButton)`
  margin-right: 0;
  width: 8.05rem;
`;

export const StyledSecondayButton = styled(SecondaryButton)`
  background-color: white;
  border: 0.1rem solid #1e88e5;
  color: #1e88e5;

  &:hover {
    background-color: white;
  }
`;

export const StyledSubHeader = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledSuccessContent = styled.div`
  color: ${textColor};
  font-size: ${defaultFontSize};
  line-height: 1.5;
  padding: 0 1rem;
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  height: auto !important;
  width: 100%;
  color: ${textColor};
`;

export const TextareaWrapper = styled.div`
  width: 100%;
`;