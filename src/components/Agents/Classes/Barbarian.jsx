const { Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } = require("@mui/material");

const levels = [
    { level: 1, proficiencyBonus: '+2', features: 'Rage, Unarmored Defense', rages: 2, rageDamage: '+2' },
    { level: 2, proficiencyBonus: '+2', features: 'Reckless Attack, Danger Sense', rages: 2, rageDamage: '+2' },
    { level: 3, proficiencyBonus: '+2', features: 'Primal Path', rages: 3, rageDamage: '+2' },
    { level: 4, proficiencyBonus: '+2', features: 'Ability Score Improvement', rages: 3, rageDamage: '+2' },
    { level: 5, proficiencyBonus: '+3', features: 'Extra Attack, Fast Movement', rages: 3, rageDamage: '+2' },
    { level: 6, proficiencyBonus: '+3', features: 'Path feature', rages: 4, rageDamage: '+2' },
    { level: 7, proficiencyBonus: '+3', features: 'Feral Instinct', rages: 4, rageDamage: '+2' },
    { level: 8, proficiencyBonus: '+3', features: 'Ability Score Improvement', rages: 4, rageDamage: '+2' },
    { level: 9, proficiencyBonus: '+4', features: 'Brutal Critical (1 die)', rages: 4, rageDamage: '+3' },
    { level: 10, proficiencyBonus: '+4', features: 'Path feature', rages: 4, rageDamage: '+3' },
    { level: 11, proficiencyBonus: '+4', features: 'Relentless Rage', rages: 4, rageDamage: '+3' },
    { level: 12, proficiencyBonus: '+4', features: 'Ability Score Improvement', rages: 5, rageDamage: '+3' },
    { level: 13, proficiencyBonus: '+5', features: 'Brutal Critical (2 dice)', rages: 5, rageDamage: '+3' },
    { level: 14, proficiencyBonus: '+5', features: 'Path feature', rages: 5, rageDamage: '+3' },
    { level: 15, proficiencyBonus: '+5', features: 'Persistent Rage', rages: 5, rageDamage: '+3' },
    { level: 16, proficiencyBonus: '+5', features: 'Ability Score Improvement', rages: 5, rageDamage: '+4' },
    { level: 17, proficiencyBonus: '+6', features: 'Brutal Critical (3 dice)', rages: 6, rageDamage: '+4' },
    { level: 18, proficiencyBonus: '+6', features: 'Indomitable Might', rages: 6, rageDamage: '+4' },
    { level: 19, proficiencyBonus: '+6', features: 'Ability Score Improvement', rages: 6, rageDamage: '+4' },
    { level: 20, proficiencyBonus: '+6', features: 'Primal Champion', rages: 'Unlimited', rageDamage: '+4' },
];

const barbarian =
    <div>

        <div>
            <h2><strong>Pontos de Vida</strong></h2>
            <p><strong>Dados de Vida:</strong> 1d12 por nível de bárbaro</p>
            <p><strong>Pontos de Vida no 1º Nível:</strong> 12 + o modificador de Constituição</p>
            <p><strong>Pontos de Vida em Níveis Superiores:</strong> 1d12 (ou 7) + o modificador de Constituição por nível de bárbaro após o 1º</p>
        </div>

        <div>
        <br />
            <h2><strong>Proficiências</strong></h2>
            <p><strong>Armadura:</strong> Armaduras leves, armaduras médias, escudos</p>
            <p><strong>Armas:</strong> Armas simples, armas marciais</p>
            <p><strong>Ferramentas:</strong> Nenhuma</p>
            <p><strong>Testes de Resistência:</strong> Força, Constituição</p>
            <p><strong>Habilidades:</strong> Escolha duas entre Adestramento de Animais, Atletismo, Intimidação, Natureza, Percepção e Sobrevivência</p>
        </div>
        <br />
        <div>
            <h2><strong>Equipamento</strong></h2>
            <p>Você começa com o seguinte equipamento, além do equipamento concedido pelo seu histórico:</p>
            <p>(a) um machado grande ou (b) qualquer arma corpo a corpo marcial</p>
            <p>(a) dois machados de mão ou (b) qualquer arma simples</p>
            <p>Um pacote do explorador e quatro javelins</p>
        </div>
        <br />
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Level</strong></TableCell>
                        <TableCell><strong>Proficiency Bonus</strong></TableCell>
                        <TableCell><strong>Features</strong></TableCell>
                        <TableCell><strong>Rages</strong></TableCell>
                        <TableCell><strong>Rage Damage</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {levels.map((row) => (
                        <TableRow key={row.level}>
                            <TableCell>{row.level}</TableCell>
                            <TableCell>{row.proficiencyBonus}</TableCell>
                            <TableCell>{row.features}</TableCell>
                            <TableCell>{row.rages}</TableCell>
                            <TableCell>{row.rageDamage}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <div>
            <br/>
            <h2><strong>Raiva</strong></h2>
            <p>Em batalha, você luta com ferocidade primal. Em seu turno, você pode entrar em um estado de raiva como uma ação bônus.</p>
            <p>Enquanto está em estado de raiva, você obtém os seguintes benefícios se não estiver usando armadura pesada:</p>
            <table>
                <tbody>
                <br/>
                    <tr>
                        <td><strong>Vantagens:</strong></td>
                        <td>Você tem vantagem em testes de Força e em testes de resistência de Força.</td>
                    </tr>
                    <br/>
                    <tr>
                        <td><strong>Bônus de Dano:</strong></td>
                        <td>
                            Quando realiza um ataque com arma corpo a corpo usando Força, você ganha um bônus no rolar de dano que aumenta à medida que ganha níveis como bárbaro, conforme mostrado na coluna "Dano da Raiva" da tabela do Bárbaro.
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><strong>Resistência a Dano:</strong></td>
                        <td>Você tem resistência a dano contundente, perfurante e cortante.</td>
                    </tr>
                    <br/>
                    <tr>
                        <td><strong>Restrição de Magias:</strong></td>
                        <td>
                            Se você for capaz de lançar magias, não pode lançá-las nem se concentrar nelas enquanto estiver em estado de raiva.
                        </td>
                    </tr>
                    <br/>
                </tbody>
            </table>
            <p>Sua raiva dura por 1 minuto. Ela termina antecipadamente se você for derrubado inconsciente ou se seu turno terminar e você não tiver atacado uma criatura hostil desde o seu último turno ou sofrido dano desde então. Você também pode encerrar sua raiva em seu turno como uma ação bônus.</p>
            <p>Uma vez que você tenha entrado em raiva o número de vezes mostrado para o seu nível de bárbaro na coluna "Raivas" da tabela do Bárbaro, você deve terminar um descanso longo antes de poder entrar em raiva novamente.</p>
        </div>
        <div>
        <br/>
            <h2><strong>Recursos da Classe</strong></h2>
            <br/>

            <h3><strong>Defesa Sem Armadura</strong></h3>
            <p>Ao não estar usando nenhuma armadura, sua Classe de Armadura é igual a 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e ainda obter esse benefício.</p>
            <br/>
            <h3><strong>Ataque Despreocupado</strong></h3>
            
            <p>Começando no 2º nível, você pode abandonar todas as preocupações com a defesa para atacar com desespero feroz. Quando você realiza seu primeiro ataque em seu turno, você pode decidir atacar de maneira despreocupada. Fazê-lo lhe dá vantagem em rolagens de ataque com arma corpo a corpo usando Força durante este turno, mas as rolagens de ataque contra você têm vantagem até o seu próximo turno.</p>
            <br/>
            <h3><strong>Sentido de Perigo</strong></h3>
            <p>No 2º nível, você ganha um sentido peculiar de quando as coisas ao seu redor não estão como deveriam, dando-lhe uma vantagem ao se esquivar do perigo.</p>
            <p>Você tem vantagem em testes de resistência de Destreza contra efeitos que você pode ver, como armadilhas e magias. Para obter esse benefício, você não pode estar cego, surdo ou incapacitado.</p>
            <br/>
            <h3><strong>Caminho Primal</strong></h3>
            <p>No 3º nível, você escolhe um caminho que molda a natureza de sua raiva. "Caminho do Berserker" é a única opção "oficial" lançada pela Wizards of the Coast.</p>
            <p>A escolha concede recursos no 3º nível e novamente nos níveis 6, 10 e 14.</p>
            <br/>
            <h3><strong>Melhoria de Atributo</strong></h3>
            <p>Quando você atinge o 4º nível e novamente nos níveis 8, 12, 16 e 19, você pode aumentar um atributo de sua escolha em 2, ou você pode aumentar dois atributos de sua escolha em 1. Como de costume, você não pode aumentar um atributo acima de 20 usando este recurso.</p>
            <br/>
            <h3><strong>Ataque Extra</strong></h3>
            <p>Começando no 5º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque em seu turno.</p>
            <br/>
            <h3><strong>Movimento Rápido</strong></h3>
            <p>Começando no 5º nível, sua velocidade aumenta em 10 pés enquanto você não estiver usando armadura pesada.</p>
            <br/>
            <h3><strong>Instinto Selvagem</strong></h3>
            <p>No 7º nível, seus instintos são tão apurados que você tem vantagem em rolagens de iniciativa.</p>
            <p>Além disso, se você estiver surpreso no início do combate e não estiver incapacitado, pode agir normalmente em seu primeiro turno, mas somente se entrar em sua raiva antes de fazer qualquer outra coisa nesse turno.</p>
            <br/>
            <h3><strong>Critério Brutal</strong></h3>
            <p>Começando no 9º nível, você pode rolar um dado adicional de dano de arma ao determinar o dano extra para um acerto crítico com um ataque corpo a corpo.</p>
            <p>Isso aumenta para dois dados adicionais no 13º nível e três dados adicionais no 17º nível.</p>
            <br/>
            <h3><strong>Raiva Implacável</strong></h3>
            <p>Começando no 11º nível, sua raiva pode mantê-lo lutando apesar de ferimentos graves. Se você cair a 0 pontos de vida enquanto estiver em raiva e não morrer imediatamente, você pode fazer um teste de resistência de Constituição CD 10. Se você tiver sucesso, cai a 1 ponto de vida em vez de cair inconsciente.</p>
            <p>Cada vez que você usa esse recurso após o primeiro, a CD aumenta em 5. Quando você termina um descanso curto ou longo, a CD é redefinida para 10.</p>
            <br/>
            <h3><strong>Raiva Persistente</strong></h3>
            <p>Começando no 15º nível, sua raiva é tão intensa que termina apenas se você cair inconsciente ou escolher encerrá-la.</p>
            <br/>
            <h3><strong>Poder Inabalável</strong></h3>
            <p>Começando no 18º nível, se sua soma para um teste de Força for menor que seu valor de Força, você pode usar esse valor em vez do total.</p>
            <br/>
            <h3><strong>Campeão Primal</strong></h3>
            <p>No 20º nível, você incorpora o poder dos selvagens. Seus valores de Força e Constituição aumentam em 4. Seu máximo para esses valores agora é 24.</p>
        </div>
    </div>


export default barbarian