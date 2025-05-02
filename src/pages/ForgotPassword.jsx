
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AuthHeader from "@/components/AuthHeader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, send a password reset request to your backend API
      // For now, we'll simulate a successful request
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Reset link sent",
          description: "If an account exists with this email, you will receive a password reset link.",
        });
      }, 1000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Request failed",
        description: "Failed to send reset link. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <AuthHeader />
        
        <div className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold">Check your email</h2>
              <p className="text-gray-600">
                We've sent a password reset link to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-gray-500">
                Didn't receive an email? Check your spam folder or try again.
              </p>
              <div className="pt-4">
                <Link to="/" className="text-primary hover:text-primary/90 font-medium">
                  Back to login
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-center mb-4">Reset your password</h2>
              <p className="text-gray-600 text-center mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 auth-input"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>

                <div className="text-center text-sm">
                  <Link to="/" className="text-gray-600 hover:text-gray-800">
                    Back to login
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
