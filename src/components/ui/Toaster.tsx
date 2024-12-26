// components/ui/Toaster.tsx
import { Toaster as HotToaster } from "react-hot-toast";

const Toaster = () => {
    return (
        <HotToaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                // Default options for different toast types
                success: {
                    style: {
                        background: "#4caf50",
                        color: "#fff",
                    },
                },
                error: {
                    style: {
                        background: "#f44336",
                        color: "#fff",
                    },
                },
                loading: {
                    style: {
                        background: "#333",
                        color: "#fff",
                    },
                },
            }}
        />
    );
};

export default Toaster;