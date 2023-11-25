import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
  switch (error) {
    case 1001:
      toast.error("아이디 혹은 비밀번호를 입력해주세요.");
      break;

    case 1002:
      toast.error("아이디 혹은 비밀번호가 일치하지 않습니다.");
      break;

    default:
      break;
  }
};
