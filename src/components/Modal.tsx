import { PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import Form from "./Form";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="modal-btn"
          role="button"
          variant={"default"}
          className="px-3 text-base"
        >
          <span className="hidden lg:block">Заказать звонок</span>
          <PhoneIcon className="block h-6 w-6 lg:hidden" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex w-full flex-col rounded-3xl bg-primaryColor px-5 py-7 dark:bg-white sm:px-6 sm:py-10 lg:w-1/2 lg:max-w-full xl:px-16 xl:py-14">
        <DialogHeader className="mb-3">
          <DialogTitle className="tex-white text-center text-xl font-bold text-white dark:text-primaryColor sm:text-2xl">
            Звоните нам по телефону <br />
            <a href="tel:+998900198505">+998(90)019-85-05</a>
          </DialogTitle>
        </DialogHeader>

        <p className="mb-2 text-center text-sm font-medium text-white dark:text-primaryColor sm:text-base">
          или закажите обратный звонок чтобы получить ответы на все интересующие
          вас вопросы.
        </p>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
