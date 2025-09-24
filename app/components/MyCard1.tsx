interface MyCardProps {
    title: string;
    description?: string;
    cardClassName?: string;
    titleClassName?: string;
  }
  
  const MyCard1 = ({ title, description, cardClassName, titleClassName }: MyCardProps) => {
      return (
        <div className={cardClassName}>
          <h2 className={titleClassName}>{title}</h2>
          <p>{description}</p>
        </div>
      );
    };
    
    export default MyCard1;