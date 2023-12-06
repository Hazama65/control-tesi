
interface InputProps{
    title: string,
    content: any
}

const ContainerInfo = ({title,content}:InputProps) => (
    <div className="containerInfo">
        <div className="Info">
            <span>{title}</span>
            <div className="InfoColumns">
                {content}
            </div>
        </div>
    </div>
);

export default ContainerInfo;
