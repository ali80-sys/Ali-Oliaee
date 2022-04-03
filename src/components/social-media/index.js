import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import { ReactComponent as FrontendMentorLogo } from "../../assets/images/frontendmentor-logo.svg";
import { ReactComponent as GitlabLogo } from "../../assets/images/gitlab-logo.svg";
import "./style.scss";

const SocialButtons = ({ className }) => {
  return (
    <div className={className ?? "social-media"}>
      <IconButton className="icon-button">
        <GitHubIcon />
      </IconButton>
      <IconButton className="icon-button">
        <GitlabLogo className="icon" />
      </IconButton>
      <IconButton className="icon-button">
        <FrontendMentorLogo className="icon" />
      </IconButton>
      <IconButton className="icon-button">
        <GoogleIcon />
      </IconButton>
      <IconButton className="icon-button">
        <TelegramIcon />
      </IconButton>
      <IconButton className="icon-button">
        <InstagramIcon />
      </IconButton>
      <IconButton className="icon-button">
        <WhatsAppIcon />
      </IconButton>
    </div>
  );
};

export default SocialButtons;
