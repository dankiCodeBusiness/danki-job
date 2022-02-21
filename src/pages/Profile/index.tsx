import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import avatarJpg from '../../assets/images/avatar.jpeg'
import placeholder from '../../assets/images/placeholder.png'
import { CoverProfile } from '../../components/CoverProfile'
import { Helmet } from 'react-helmet'
import { Button } from '../../components/Button'
import { DisplayProjectModal } from '../../components/DisplayProjectModal'

interface ISkillsProps {
  id: string
  name: string
}

interface IProjectImagesProps {
  id: string
  url: string
  thumb: string
}

interface IProjectsProps {
  id: string
  title: string
  description: string
  images: IProjectImagesProps[]
}

export interface IProfileProps {
  id: string
  first_name: string
  last_name: string
  full_name: string
  avatar?: string
  description: string
  email: string
  phone_number?: string
  skills: ISkillsProps[]
  projects: IProjectsProps[]
}

export function Profile() {
  const { profileId } = useParams()
  const [profile, setProfile] = useState<IProfileProps>({} as IProfileProps)
  const [projectId, setProjectId] = useState('')

  const [isOpenDisplayProjectModal, setIsOpenDisplayProjectModal] =
    useState(false)

  function handleCloseDisplayProjectModal() {
    setIsOpenDisplayProjectModal(false)
  }

  function handleOpenDisplayProjectModal() {
    setProjectId('1')
    setIsOpenDisplayProjectModal(true)
  }

  useEffect(() => {
    const user: IProfileProps = {
      id: String(profileId),
      avatar: avatarJpg,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum eius explicabo hic, illum in ipsum magni modi mollitia neque non optio porro provident soluta tempora unde! Eveniet, minus?',
      email: 'rafael@dankicode.com',
      first_name: 'Rafael',
      last_name: 'Pacífico Segundo Lima',
      full_name: 'Rafael Pacífico Segundo Lima',
      phone_number: '11 9 9999-9999',
      skills: [
        { id: String(1), name: 'Front-end' },
        { id: String(2), name: 'Back-end' },
        { id: String(3), name: 'Games' },
        { id: String(4), name: 'Blockchain' }
      ],
      projects: [
        {
          id: String(1),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum eius explicabo hic, illum in ipsum magni modi mollitia neque non optio porro provident soluta tempora unde! Eveniet, minus?',
          title: 'Danki Job',
          images: [
              { id: String(1), thumb: placeholder, url: placeholder },
              { id: String(2), thumb: placeholder, url: placeholder },
              { id: String(3), thumb: placeholder, url: placeholder },
              { id: String(4), thumb: placeholder, url: placeholder },
          ]
        },
        {
          id: String(2),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum eius explicabo hic, illum in ipsum magni modi mollitia neque non optio porro provident soluta tempora unde! Eveniet, minus?',
          title: 'Danki Club',
          images: [{ id: String(2), thumb: placeholder, url: placeholder }]
        }
      ]
    }
    setProfile(user)
  }, [])

  return (
    <>
      {profile.id && (
        <>
          <Helmet>
            <title>Danki Job - {profile.full_name}</title>
            <meta
              name={'description'}
              content={`Programdor(a) extraordinário(a) ${profile.full_name}`}
            />
          </Helmet>
          <Header />
          <CoverProfile name={profile.full_name} />
          <Background>
            <Container>
              <article>
                <header>
                  <img src={profile.avatar} alt={profile.full_name} />
                  <p>{profile.description}</p>
                </header>
                <div>
                  <Button
                    title={'Entrar em contato via email'}
                    handleAction={() => {}}
                  />
                  <Button
                    title={'Chamar no WhatsApp'}
                    outline
                    handleAction={() => {}}
                  />
                </div>
              </article>
              <section className={'skills'}>
                <h2>Habilidades</h2>
                <div>
                  {profile.skills.map((skill) => (
                    <p key={skill.id}>{skill.name}</p>
                  ))}
                </div>
              </section>
              <section className={'projects'}>
                <h2>Projetos</h2>
                <div>
                  {profile.projects.map((project) => (
                    <article key={project.id}>
                      <header>
                        <img
                          src={project.images[0].url}
                          alt={project.title}
                          onClick={handleOpenDisplayProjectModal}
                        />
                        <h1>{project.title}</h1>
                      </header>
                      <p>{project.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </Container>
          </Background>

          <DisplayProjectModal
            project={profile}
            isOpen={isOpenDisplayProjectModal}
            closeModal={handleCloseDisplayProjectModal}
          />
        </>
      )}
    </>
  )
}
