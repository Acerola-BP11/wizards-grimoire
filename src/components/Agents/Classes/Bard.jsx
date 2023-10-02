import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const renderTableRows = () => {
    const bardLevels = [
        { level: 1, bonusProficiencia: '+2', recursos: 'Conjuração, Inspiração de Bardo (d6)', truquesConhecidos: 2, magiasConhecidas: 4, circulosMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { level: 2, bonusProficiencia: '+2', recursos: 'Jack of All Trades, Canção do Descanso (d6)', truquesConhecidos: 2, magiasConhecidas: 5, circulosMagia: [3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { level: 3, bonusProficiencia: '+2', recursos: 'Colégio de Bardo, Perícia', truquesConhecidos: 2, magiasConhecidas: 6, circulosMagia: [4, 2, 0, 0, 0, 0, 0, 0, 0] },
        { level: 4, bonusProficiencia: '+2', recursos: 'Melhoria de Atributo', truquesConhecidos: 3, magiasConhecidas: 7, circulosMagia: [4, 3, 0, 0, 0, 0, 0, 0, 0] },
        { level: 5, bonusProficiencia: '+3', recursos: 'Inspiração de Bardo (d8), Fonte de Inspiração', truquesConhecidos: 3, magiasConhecidas: 8, circulosMagia: [4, 3, 2, 0, 0, 0, 0, 0, 0] },
        { level: 6, bonusProficiencia: '+3', recursos: 'Contraencanto, Recurso de Colégio de Bardo', truquesConhecidos: 3, magiasConhecidas: 9, circulosMagia: [4, 3, 3, 0, 0, 0, 0, 0, 0] },
        { level: 7, bonusProficiencia: '+3', recursos: '-', truquesConhecidos: 4, magiasConhecidas: 10, circulosMagia: [4, 3, 3, 1, 0, 0, 0, 0, 0] },
        { level: 8, bonusProficiencia: '+3', recursos: 'Melhoria de Atributo', truquesConhecidos: 4, magiasConhecidas: 11, circulosMagia: [4, 3, 3, 2, 0, 0, 0, 0, 0] },
        { level: 9, bonusProficiencia: '+4', recursos: 'Canção do Descanso (d8)', truquesConhecidos: 4, magiasConhecidas: 12, circulosMagia: [4, 3, 3, 3, 1, 0, 0, 0, 0] },
        { level: 10, bonusProficiencia: '+4', recursos: 'Inspiração de Bardo (d10), Perícia, Segredos Mágicos', truquesConhecidos: 5, magiasConhecidas: 14, circulosMagia: [4, 3, 3, 3, 2, 0, 0, 0, 0] },
        { level: 11, bonusProficiencia: '+4', recursos: '-', truquesConhecidos: 5, magiasConhecidas: 15, circulosMagia: [4, 3, 3, 3, 2, 1, 0, 0, 0] },
        { level: 12, bonusProficiencia: '+4', recursos: 'Melhoria de Atributo', truquesConhecidos: 5, magiasConhecidas: 15, circulosMagia: [4, 3, 3, 3, 2, 1, 0, 0, 0] },
        { level: 13, bonusProficiencia: '+5', recursos: 'Canção do Descanso (d10)', truquesConhecidos: 5, magiasConhecidas: 16, circulosMagia: [4, 3, 3, 3, 2, 1, 1, 0, 0] },
        { level: 14, bonusProficiencia: '+5', recursos: 'Segredos Mágicos, Recurso de Colégio de Bardo', truquesConhecidos: 6, magiasConhecidas: 18, circulosMagia: [4, 3, 3, 3, 2, 1, 1, 0, 0] },
        { level: 15, bonusProficiencia: '+5', recursos: 'Inspiração de Bardo (d12)', truquesConhecidos: 6, magiasConhecidas: 19, circulosMagia: [4, 3, 3, 3, 2, 1, 1, 1, 0] },
        { level: 16, bonusProficiencia: '+5', recursos: 'Melhoria de Atributo', truquesConhecidos: 6, magiasConhecidas: 19, circulosMagia: [4, 3, 3, 3, 2, 1, 1, 1, 0] },
        { level: 17, bonusProficiencia: '+6', recursos: 'Canção do Descanso (d12)', truquesConhecidos: 6, magiasConhecidas: 20, circulosMagia: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
        { level: 18, bonusProficiencia: '+6', recursos: 'Segredos Mágicos', truquesConhecidos: 6, magiasConhecidas: 22, circulosMagia: [4, 3, 3, 3, 3, 1, 1, 1, 1] },
        { level: 19, bonusProficiencia: '+6', recursos: 'Melhoria de Atributo', truquesConhecidos: 6, magiasConhecidas: 22, circulosMagia: [4, 3, 3, 3, 3, 2, 1, 1, 1] },
        { level: 20, bonusProficiencia: '+6', recursos: 'Inspiração Superior', truquesConhecidos: 6, magiasConhecidas: 22, circulosMagia: [4, 3, 3, 3, 3, 2, 2, 1, 1] },
      ];
    return bardLevels.map((levelData) => (
      <TableRow key={levelData.level}>
        <TableCell>{levelData.level}</TableCell>
        <TableCell>{levelData.bonusProficiencia}</TableCell>
        <TableCell>{levelData.recursos}</TableCell>
        <TableCell>{levelData.truquesConhecidos}</TableCell>
        <TableCell>{levelData.magiasConhecidas}</TableCell>
        {levelData.circulosMagia.map((slots, index) => (
          <TableCell key={index}>{slots}</TableCell>
        ))}
      </TableRow>
    ));
  };

const bard =
<div>

<h3><strong>Pontos de Vida</strong></h3>
<br/>
<ul>
  <li><strong>Dados de Vida:</strong> 1d8 por nível de bardo</li>
  <li><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição</li>
  <li><strong>Pontos de Vida em Níveis Superiores:</strong> 1d8 (ou 5) + seu modificador de Constituição por nível de bardo após o 1º</li>
</ul>

<h3><strong>Proficiências</strong></h3>
<ul>
  <li><strong>Armadura:</strong> Armadura leve</li>
  <li><strong>Armas:</strong> Armas simples, bestas leves, espadas longas, rapiers, espadas curtas</li>
  <li><strong>Ferramentas:</strong> Três instrumentos musicais de sua escolha</li>
  <li><strong>Testes de Resistência:</strong> Destreza, Carisma</li>
  <li><strong>Habilidades:</strong> Escolha três quaisquer</li>
</ul>

<h3>Equipamento</h3>
<ul>
  <li>(a) uma rapieira, (b) uma espada longa ou (c) qualquer arma simples</li>
  <li>(a) um kit de diplomata ou (b) um kit de artista</li>
  <li>(a) um alaúde ou (b) qualquer outro instrumento musical</li>
  <li>Armadura de couro e uma adaga</li>
</ul>
<TableContainer component={Paper} style={
    {overflowX: 'auto'}
}
tou
>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nível</TableCell>
            <TableCell>Bônus de Proficiência</TableCell>
            <TableCell>Recursos</TableCell>
            <TableCell>Truques Conhecidos</TableCell>
            <TableCell>Magias Conhecidas</TableCell>
            <TableCell>1º</TableCell>
            <TableCell>2º</TableCell>
            <TableCell>3º</TableCell>
            <TableCell>4º</TableCell>
            <TableCell>5º</TableCell>
            <TableCell>6º</TableCell>
            <TableCell>7º</TableCell>
            <TableCell>8º</TableCell>
            <TableCell>9º</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
    </TableContainer>
</div>

export default bard