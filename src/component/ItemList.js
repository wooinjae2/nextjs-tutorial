import {Grid} from 'semantic-ui-react';


export default function ItemList({list}) {
  console.log(list)
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map(data =>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </div>)
}