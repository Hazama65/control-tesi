
interface InputProps {
    title: string,
    content: any
}

const ContainerInfo = ({ title, content }: InputProps) => (
    <>
        <div className="containerInfo">
            <div className="Info-title">
                <span>{title}</span>
            </div>
                <div className="divInfo">
                    {content}
                </div>
        </div>
    </>
);

export default ContainerInfo;
