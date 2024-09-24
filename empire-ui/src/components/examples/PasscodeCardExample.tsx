import { PasscodeCard } from "@/components/core/passcode-card";

export const PasscodeCardExample = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PasscodeCard correctPasscode="1234567" length={7} />
    </div>
  );
};
