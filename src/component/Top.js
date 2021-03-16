import Gnb from './Gnb';
import { Header } from 'semantic-ui-react'

export default function Top() {
  return (
    <>
      <div className="header">
        <img src='./fileserver.PNG' alt="메인로고" />
        <Header as="h1">File Server</Header>
      </div>
      <Gnb />
    </>
  )
}