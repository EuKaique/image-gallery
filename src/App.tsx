import { FormEvent, useEffect, useState } from "react"
import { Container, Area, Header, ScreenLoading, PhotoList, Form } from "./App.style"
import { PhotoItem } from "./components/PhotoItem"
import * as Photos from "./services/photos"
import { Photo } from "./types/Photo"

const App = () => {
  const [loading, setLoading]     = useState(false)
  const [photos, setPhotos]       = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      
      setPhotos(await Photos.getAll())

      setLoading(false)
    }
    getPhotos()
  },[])

  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const file = formData.get('image') as File;

    if(file && file.size > 0){
      setUploading(true)

      let result = await Photos.insertFile(file)

      setUploading(false)

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList) 
      }
    }
  }

  return (
    <Container>
      <Area>
        <Header>Galeria de fotos</Header>

        <Form method="POST" onSubmit={handleFormSubmit}>
          <label htmlFor="image">
            Escolher arquivo
            <input type="file" name="image" id="image" />
          </label>
          <input type="submit" value="Enviar" />
          {uploading && 'Enviando...'}
        </Form>

        {loading && 
          <ScreenLoading>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </ScreenLoading>
        }

        {!loading && photos.length > 0 && 
          <PhotoList>
            { photos.map((item, index) => (
                <PhotoItem key={index} url={item.url} name={item.name} />
              )) 
            }
          </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenLoading>
            <div className="emoji">😕</div>
            <div>Nenhum registro encontrado.</div>
          </ScreenLoading>
        }

      </Area>
    </Container>
  )
}

export default App