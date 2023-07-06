import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./ExampleCss.css";
import { Link } from "react-router-dom";

export default function ScrollDialog() {
  const [terms, setTerms] = React.useState(false);
  const [policy, setPolicy] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleTermsOpen = (scrollType) => () => {
    setTerms(true);
    setScroll(scrollType);
  };

  const handleTermsClose = () => {
    setTerms(false);
  };

  const handlePolicyOpen = (scrollType) => () => {
    setPolicy(true);
    setScroll(scrollType);
  };

  const handlePolicyClose = () => {
    setPolicy(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (terms || policy) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [terms, policy]);

  return (
    <div>
      By continuing, you agree to our{" "}
      <Link className="Link" onClick={handleTermsOpen("paper")}>
        Terms of Use
      </Link>
      <Dialog
        open={terms}
        onClose={handleTermsClose}
        scroll={scroll}
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title">Terms of Use</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
          >
            `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.` `Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.` `Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.` `Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.` `Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.` `Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.` `Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          </DialogContentText>
        </DialogContent>
      </Dialog>{" "}
      and{" "}
      <Link className="Link" onClick={handlePolicyOpen("paper")}>
        Privacy Policy
      </Link>
      <Dialog
        open={policy}
        onClose={handlePolicyClose}
        scroll={scroll}
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title">Privacy Policy</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
          >
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.` `Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et.`
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
