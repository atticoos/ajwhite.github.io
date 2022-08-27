import styled from '@emotion/styled';
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../design-system';

const iconSize = "3x";
export function Socials() {
  return (
    <SocialRow>
      <a href="https://www.linkedin.com/in/atticuswhite/">
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>
      <a href="https://twitter.com/atticoos">
        <FontAwesomeIcon icon={faTwitter} size={iconSize} />
      </a>
      <a href="https://www.instagram.com/atticuswashere/">
        <FontAwesomeIcon icon={faInstagram} size={iconSize} />
      </a>
      <a href='https://github.com/ajwhite'>
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>
    </SocialRow>
  )
}

const SocialRow = styled.div`
  margin-top: 18px;
  & svg {
    margin-right: 24px;
  }
`;
