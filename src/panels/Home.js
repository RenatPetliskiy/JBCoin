import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
var coins = 1;

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>JBCoin</PanelHeader>
		
		<Group title="Navigation Example">
			<Cell>
                        	{`${coins}`}
                        </Cell>
                        <Div>
                        	<Button size="xl" level="2" onClick={coins += 150, go} data-to="persik">Клик</Button>
                	</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};


export default Home;
