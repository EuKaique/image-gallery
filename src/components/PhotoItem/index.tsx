import { Container } from "./styles"
import { FaTrash } from "react-icons/fa"
import { deleteFile } from "../../services/photos"

type Props = {
    name: string | any,
    url: string
}

export const PhotoItem = ({name, url}: Props) => {
    const handleDeleteFile = async () => {
        await deleteFile(name)
        window.location.reload()
    }

    return (
        <Container>
            <img src={url} alt={name} />
            <p title={name}>{name.length > 20 ? name.substring(0, 23) + '...': name}</p>
            <button onClick={handleDeleteFile}>Excluir<FaTrash className="trash-class"/></button>
        </Container>
    )
}