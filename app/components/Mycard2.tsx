interface MyCardProps {
    className?: string;
    children: React.ReactNode;
  }
  
  const MyCard2 = ({ className, children }: MyCardProps) => {
      return (
        <div className={className}>
          {children}
        </div>
      );
    };
    
    export default MyCard2;