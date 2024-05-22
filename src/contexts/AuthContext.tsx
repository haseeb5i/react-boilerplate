import { createContext, useMemo } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryKey,
  QueryStatus,
} from "@tanstack/react-query";
import { loginFn, logoutFn, registerFn, loadUser } from "@/lib/auth";
import { type AuthUser } from "@/features/auth";
// import { AxiosError } from "axios";

// TODO: improve types
export interface AuthContextValue {
  user: AuthUser | null | undefined;
  authStatus: QueryStatus;
  error: unknown;
  refetchUser: Function;
  login: Function;
  isLoggingIn: boolean;
  logout: () => void;
  isLoggingOut: boolean;
  register: Function;
  isRegistering: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
AuthContext.displayName = "AuthContext";

export interface AuthProviderProps {
  children: React.ReactNode;
  authKey?: QueryKey;
  waitInitial?: boolean;
}

export function AuthProvider(props: AuthProviderProps) {
  const { children, authKey = ["auth-user"], waitInitial = true } = props;
  const queryClient = useQueryClient();

  const {
    data: user,
    error,
    status,
    fetchStatus,
    refetch,
  } = useQuery({ queryKey: authKey, queryFn: loadUser });

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      queryClient.setQueryData(authKey, user);
    },
  });

  const registerMutation = useMutation({ mutationFn: registerFn });

  const logoutMutation = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = useMemo(
    () => ({
      user,
      authStatus: status,
      error,
      refetchUser: refetch,
      login: loginMutation.mutateAsync,
      isLoggingIn: loginMutation.isPending,
      logout: logoutMutation.mutateAsync,
      isLoggingOut: logoutMutation.isPending,
      register: registerMutation.mutateAsync,
      isRegistering: registerMutation.isPending,
    }),
    [
      user,
      status,
      error,
      refetch,
      loginMutation.mutateAsync,
      loginMutation.isPending,
      logoutMutation.mutateAsync,
      logoutMutation.isPending,
      registerMutation.mutateAsync,
      registerMutation.isPending,
    ]
  );

  if (status === "success" || !waitInitial) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  if (status === "pending" || fetchStatus === "idle") {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("AuthContext", error);
    return <div>Something went wrong</div>;
  }

  return <div>Unhandled status: {status}</div>;
}
