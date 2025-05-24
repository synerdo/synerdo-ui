import { SxStyle } from "@/classes";
import { useModalsStore } from "@/stores";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

interface ModalProps extends Omit<DialogProps, "open"> {
  id: string;
}

export function Modal({ id, title, children, ...props }: ModalProps) {
  const isOpen = useModalsStore((s) => s.getIsModalOpen(id));
  const closeModal = useModalsStore((s) => s.closeModal);

  const handleClose = () => {
    closeModal(id);
  };

  return (
    <Dialog {...props} fullWidth open={isOpen} onClose={handleClose}>
      <DialogTitle sx={sxStyle.title}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        <IconButton onClick={handleClose} sx={sxStyle.button}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={sxStyle.content}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

const sxStyle = SxStyle.create({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    py: 2,
    px: 2.5,
  },
  button: {
    p: 1,
    my: -1,
    ml: 1,
    mr: -1,
  },
  content: {
    py: 2.5,
    px: 2.5,
  },
});
