import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Button 
        size="lg"
        className="h-16 w-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 p-0"
        onClick={() => window.location.href = 'tel:+79773211115'}
      >
        <Icon name="Phone" size={28} className="text-white" />
      </Button>
    </div>
  );
};

export default FloatingCallButton;
