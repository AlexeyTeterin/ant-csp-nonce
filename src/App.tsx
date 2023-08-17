import {Button, ConfigProvider} from 'antd';
import styled from 'styled-components';

const StyledButton = styled.button({
	background: '#999fff',
	color: 'white',
	marginRight: 20,
	outline: 'none',
});

export const App = () => {
	return (
		<>
			<StyledButton>Styled Button</StyledButton>
			<ConfigProvider csp={{nonce: 'nonce_id'}}>
				<Button>Ant Button</Button>
			</ConfigProvider>
		</>
	);
};
