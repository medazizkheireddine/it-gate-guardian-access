
import { ShieldCheck } from "lucide-react";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mb-6">
      <div className="p-3 rounded-full bg-primary/10">
        <ShieldCheck className="w-6 h-6 text-primary" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">
        Autoliv IT Management
      </h1>
      <p className="text-sm text-muted-foreground">
        Secure access for automotive safety technology
      </p>
    </div>
  );
};

export default AuthHeader;
