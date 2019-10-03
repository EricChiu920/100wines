import React from 'react';
import { fetchAllWines } from './util/WineAPIUtil';
import TableHead from './components/TableHead';
import WineRow from './components/WineRow';
import WineDescription from './components/WineDescription';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wineList: [],
      description: '',
    };

    this.setDescription = this.setDescription.bind(this);
    this.setWineList = this.setWineList.bind(this);
  }

  componentDidMount() {
    fetchAllWines()
      .then(({ data }) => {
        return this.setState({ wineList: data });
      });
  }

  setWineList(wineList) {
    this.setState({ wineList });
  }

  setDescription(description) {
    this.setState({ description });
  }

  render() {
    const { wineList, description } = this.state;
    const tableBody = wineList.map((wine) => {
      return <WineRow key={wine.id} wine={wine} setDescription={this.setDescription} />;
    });

    return (
      <>
        <div className="table-container">
          <table className="wine-table">
            <TableHead wineList={wineList} setWineList={this.setWineList} />
            <tbody>
              {tableBody}
            </tbody>
          </table>
        </div>
        <WineDescription description={description} />
      </>
    );
  }
}

export default App;
