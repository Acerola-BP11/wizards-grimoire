import { Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from "@mui/material";

const dragonAncestry = [
    { dragon: 'Preto', damageType: 'Ácido', breathWeapon: 'Linha de 5 x 9 metros (teste de Destreza)' },
    { dragon: 'Azul', damageType: 'Relâmpago', breathWeapon: 'Linha de 5 x 9 metros (teste de Destreza)' },
    { dragon: 'Latão', damageType: 'Fogo', breathWeapon: 'Linha de 5 x 9 metros (teste de Destreza)' },
    { dragon: 'Bronze', damageType: 'Relâmpago', breathWeapon: 'Linha de 5 x 9 metros (teste de Destreza)' },
    { dragon: 'Cobre', damageType: 'Ácido', breathWeapon: 'Linha de 5 x 9 metros (teste de Destreza)' },
    { dragon: 'Ouro', damageType: 'Fogo', breathWeapon: 'Cone de 15 pés (teste de Destreza)' },
    { dragon: 'Verde', damageType: 'Veneno', breathWeapon: 'Cone de 15 pés (teste de Constituição)' },
    { dragon: 'Vermelho', damageType: 'Fogo', breathWeapon: 'Cone de 15 pés (teste de Destreza)' },
    { dragon: 'Prateado', damageType: 'Gelo', breathWeapon: 'Cone de 15 pés (teste de Constituição)' },
    { dragon: 'Branco', damageType: 'Gelo', breathWeapon: 'Cone de 15 pés (teste de Constituição)' },
];

const races = [
    {
        value: 'dragonborn',
        name: 'Dragonborn',
        details:
            <>
                <p>
                    Sua herança dracônica se manifesta em uma variedade de traços que você compartilha com outros dragonborn.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Força aumenta em 2, e seu valor de Carisma aumenta em 1.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Dragonborn jovens crescem rapidamente. Eles começam a andar horas após nascerem, atingem o tamanho e desenvolvimento de uma criança humana de 10 anos de idade aos 3 anos e alcançam a idade adulta aos 15 anos. Eles vivem até cerca de 80 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Dragonborn tendem a extremos, fazendo uma escolha consciente por um dos lados na guerra cósmica entre o bem e o mal. A maioria dos dragonborn é boa, mas aqueles que se alinham com o mal podem se tornar terríveis vilões.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Dragonborn são mais altos e pesados que os humanos, medindo bem mais de 1,80 metros de altura e com uma média de quase 113 quilos. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Ancestralidade Dracônica:</strong></h2>
                <p>
                    Você tem uma ancestralidade dracônica. Escolha um tipo de dragão da tabela de Ancestralidade Dracônica. Sua arma de sopro e resistência a danos são determinadas pelo tipo de dragão, conforme mostrado na tabela.
                </p>
                <h2><strong>Arma de Sopro:</strong></h2>
                <p>
                    Você pode usar sua ação para exalar energia destrutiva. Sua ancestralidade dracônica determina o tamanho, formato e tipo de dano da exalação.
                </p>
                <p>
                    Quando você usa sua arma de sopro, cada criatura na área da exalação deve fazer um teste de resistência, cujo tipo é determinado por sua ancestralidade dracônica. A CD para esse teste de resistência é igual a 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano em um teste de resistência falho e metade desse dano em um teste bem-sucedido. O dano aumenta para 3d6 no 6º nível, 4d6 no 11º nível e 5d6 no 16º nível.
                </p>
                <div>
                    <h2><strong>Tabela: Ancestralidade Dracônica</strong></h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Dragão</strong></TableCell>
                                    <TableCell><strong>Tipo de Dano</strong></TableCell>
                                    <TableCell><strong>Arma de Sopro</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dragonAncestry.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.dragon}</TableCell>
                                        <TableCell>{row.damageType}</TableCell>
                                        <TableCell>{row.breathWeapon}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Após usar sua arma de sopro, você não pode usá-la novamente até completar um descanso curto ou longo.
                </p>
                <h2><strong>Resistência a Danos:</strong></h2>
                <p>
                    Você possui resistência ao tipo de dano associado à sua ancestralidade dracônica.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Dracônico. O Dracônico é considerado uma das línguas mais antigas e é frequentemente usado no estudo da magia. A língua soa áspera para a maioria das outras criaturas e inclui numerosas consoantes duras e sibilantes.
                </p>
            </>
    },
    {
        name: 'Anão',
        value: 'Dwarf',
        details:
            <>
                <h1><strong>Características dos Anões</strong></h1>
                <p>
                    Seu personagem anão possui uma variedade de habilidades inatas, parte e parcela da natureza anã.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Constituição aumenta em 2.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Os anões amadurecem na mesma taxa que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem cerca de 350 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    A maioria dos anões é leal, acreditando firmemente nos benefícios de uma sociedade bem ordenada. Eles tendem a ser bons também, com um forte senso de jogo limpo e a crença de que todos merecem compartilhar os benefícios de uma ordem justa.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Os anões têm altura entre 1,20 e 1,50 metros e pesam em média cerca de 68 quilos. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 7,5 metros. Sua velocidade não é reduzida ao usar armadura pesada.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Acostumado à vida subterrânea, você tem visão superior em condições de luz fraca e escuridão. Você pode enxergar em luz fraca em um raio de 18 metros de você como se fosse luz brilhante, e em escuridão como se fosse luz fraca. Você não pode distinguir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Resistência Anã:</strong></h2>
                <p>
                    Você possui vantagem em testes de resistência contra veneno e tem resistência contra dano de veneno.
                </p>
                <h2><strong>Treinamento de Combate Anão:</strong></h2>
                <p>
                    Você possui proficiência com o machado de batalha, machado de mão, martelo leve e martelo de guerra.
                </p>
                <h2><strong>Proficiência com Ferramentas:</strong></h2>
                <p>
                    Você ganha proficiência com as ferramentas de artesão de sua escolha: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.
                </p>
                <h2><strong>Astúcia em Rochas:</strong></h2>
                <p>
                    Sempre que você fizer um teste de Inteligência (História) relacionado à origem de construções em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, em vez do seu bônus de proficiência normal.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Anão. O Anão está repleto de consoantes fortes e sons guturais, e essas características se refletem em qualquer outro idioma que um anão possa falar.
                </p>
            </>
    },
    {
        name: 'Elfo',
        value: 'elf',
        details:
            <>
                <h1> <strong> Características dos Elfos </strong></h1>
                <p>
                    Seu personagem elfo possui uma variedade de habilidades naturais, resultado de milhares de anos de refinamento élfico.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Destreza aumenta em 2.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Embora os elfos atinjam a maturidade física por volta da mesma idade que os humanos, a compreensão élfica da idade adulta vai além do crescimento físico e abrange a experiência mundana. Um elfo normalmente reivindica a idade adulta e um nome de adulto por volta dos 100 anos e pode viver até 750 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Os elfos amam a liberdade, a variedade e a autoexpressão, então eles inclinam fortemente para os aspectos mais suaves do caos. Eles valorizam e protegem a liberdade dos outros, assim como a deles próprios, e são mais frequentemente bons do que o contrário. Os drows são uma exceção; seu exílio os tornou vis e perigosos. Os drows são mais frequentemente maus do que o contrário.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Os elfos têm altura variando de menos de 1,50 a mais de 1,80 metros e têm constituição esbelta. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Acostumado a florestas penumbrosas e ao céu noturno, você tem visão superior em condições de luz fraca e escuridão. Você pode ver em luz fraca em um raio de 18 metros de você como se fosse luz brilhante, e em escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Sentidos Aguçados:</strong></h2>
                <p>
                    Você possui proficiência na perícia Percepção.
                </p>
                <h2><strong>Ascendência Feérica:</strong></h2>
                <p>
                    Você possui vantagem em testes de resistência contra estar enfeitiçado, e a magia não pode fazê-lo dormir.
                </p>
                <h2><strong>Transe:</strong></h2>
                <p>
                    Elfos não precisam dormir. Em vez disso, eles meditam profundamente, permanecendo semiconscientes, por 4 horas por dia. (A palavra comum para tal meditação é "transe.") Enquanto medita, você pode sonhar de certa forma; tais sonhos são, na verdade, exercícios mentais que se tornaram reflexos ao longo dos anos de prática. Após descansar dessa forma, você ganha o mesmo benefício que um humano obtém em 8 horas de sono.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Élfico. O Élfico é fluido, com entonações sutis e gramática intrincada. A literatura élfica é rica e variada, e suas canções e poemas são famosos entre outras raças. Muitos bardos aprendem essa língua para poderem adicionar baladas élficas ao seu repertório.
                </p>
            </>
    },
    {
        name: 'Gnomo',
        value: 'gnome',
        details:
            <>
                <p>
                    Seu personagem gnomo possui certas características em comum com todos os outros gnomos.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Inteligência aumenta em 2.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Gnomos amadurecem na mesma taxa que os humanos, e a maioria deles é esperada para se estabelecer em uma vida adulta por volta dos 40 anos. Eles podem viver de 350 a quase 500 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Gnomos são mais frequentemente bons. Aqueles que tendem para a lei são sábios, engenheiros, pesquisadores, estudiosos, investigadores ou inventores. Aqueles que tendem para o caos são menestréis, trapaceiros, errantes ou joalheiros fantasiosos. Gnomos têm bom coração, e mesmo os trapaceiros entre eles são mais brincalhões do que maliciosos.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Gnomos têm entre 0,90 e 1,20 metros de altura e têm em média cerca de 18 quilos. Seu tamanho é Pequeno.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 7,5 metros.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Acostumado à vida subterrânea, você tem visão superior em condições de luz fraca e escuridão. Você pode ver em luz fraca em um raio de 18 metros de você como se fosse luz brilhante, e em escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Astúcia Gnômica:</strong></h2>
                <p>
                    Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Gnômico. A língua Gnômica, que usa o script Anão, é renomada por seus tratados técnicos e seus catálogos de conhecimento sobre o mundo natural.
                </p>
            </>
    },
    {
        name: 'Meio-Elfo',
        value: 'halfelf',
        details:
            <>
                <h1><strong>Características dos Meio-Elfos</strong></h1>
                <p>
                    Seu personagem meio-elfo possui algumas qualidades em comum com elfos e outras que são únicas para meio-elfos.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Carisma aumenta em 2, e outros dois valores de habilidade de sua escolha aumentam em 1.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Meio-elfos amadurecem na mesma taxa que os humanos e atingem a idade adulta por volta dos 20 anos. Eles vivem muito mais do que os humanos, muitas vezes excedendo 180 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Meio-elfos compartilham a inclinação caótica de sua herança élfica. Eles valorizam tanto a liberdade pessoal quanto a expressão criativa, demonstrando nem amor por líderes nem desejo por seguidores. Eles se irritam com regras, ressentem as demandas dos outros e às vezes se mostram não confiáveis, ou pelo menos imprevisíveis.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Meio-elfos têm aproximadamente o mesmo tamanho que os humanos, variando de 1,50 a 1,80 metros de altura. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Graças ao seu sangue élfico, você tem visão superior em condições de luz fraca e escuridão. Você pode ver em luz fraca em um raio de 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Ascendência Feérica:</strong></h2>
                <p>
                    Você possui vantagem em testes de resistência contra estar enfeitiçado, e a magia não pode fazê-lo dormir.
                </p>
                <h2><strong>Versatilidade de Habilidade:</strong></h2>
                <p>
                    Você ganha proficiência em duas perícias de sua escolha.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum, Élfico e em um idioma extra de sua escolha.
                </p>
            </>
    },
    {
        name: 'Meio-Orc',
        value: 'halforc',
        details:
            <>
                <h1><strong>Características dos Meio-Orcs</strong></h1>
                <p>
                    Seu personagem meio-orc possui certas características derivadas de sua ascendência orc.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Força aumenta em 2, e seu valor de Constituição aumenta em 1.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Meio-orcs amadurecem um pouco mais rápido do que os humanos, atingindo a idade adulta por volta dos 14 anos. Eles envelhecem visivelmente mais rápido e raramente vivem mais de 75 anos.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Meio-orcs herdam uma tendência ao caos de seus pais orcs e não têm uma forte inclinação para o bem. Meio-orcs criados entre orcs e dispostos a viver suas vidas com eles geralmente são malignos.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Meio-orcs são um pouco maiores e mais corpulentos do que os humanos, variando de 1,50 a bem mais de 1,80 metros de altura. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Graças ao seu sangue orc, você tem visão superior em condições de luz fraca e escuridão. Você pode ver em luz fraca em um raio de 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Ameaçador:</strong></h2>
                <p>
                    Você ganha proficiência na habilidade de Intimidação.
                </p>
                <h2><strong>Resistência Implacável:</strong></h2>
                <p>
                    Quando você é reduzido a 0 pontos de vida, mas não morto imediatamente, você pode cair para 1 ponto de vida em vez disso. Você não pode usar esse recurso novamente até terminar um descanso longo.
                </p>
                <h2><strong>Ataques Selvagens:</strong></h2>
                <p>
                    Quando você obtém um acerto crítico com um ataque de arma corpo a corpo, você pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra do acerto crítico.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Orc. Orc é uma língua áspera e estridente com consoantes duras. Não possui um script próprio, mas é escrito no script Anão.
                </p>
            </>
    },
    {
        name: 'Halfling',
        value: 'halfling',
        details:
            <>
                <h1><strong>Características dos Halflings</strong></h1>
                <p>
                    Seu personagem halfling possui várias características em comum com todos os outros halflings.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Destreza aumenta em 2.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Um halfling atinge a idade adulta aos 20 anos e geralmente vive até o meio do seu segundo século.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    A maioria dos halflings é leal e boa. Em geral, eles têm bom coração e são gentis, odeiam ver os outros sofrendo e não têm tolerância para a opressão. Eles também são muito organizados e tradicionais, dependendo muito do apoio de sua comunidade e do conforto de seus velhos costumes.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Os halflings têm em média cerca de 0,90 metros de altura e pesam cerca de 18 quilos. Seu tamanho é Pequeno.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 7,5 metros.
                </p>
                <h2><strong>Sortudo:</strong></h2>
                <p>
                    Quando você rolar um 1 no d20 para um teste de ataque, teste de habilidade ou teste de resistência, você pode rolar o dado novamente e deve usar o novo resultado.
                </p>
                <h2><strong>Destemido:</strong></h2>
                <p>
                    Você tem vantagem em testes de resistência contra estar assustado.
                </p>
                <h2><strong>Agilidade Halfling:</strong></h2>
                <p>
                    Você pode passar pelo espaço de qualquer criatura que seja de um tamanho maior que o seu.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Halfling. A língua Halfling não é secreta, mas os halflings relutam em compartilhá-la com outros. Eles escrevem muito pouco, então não têm uma rica literatura. No entanto, sua tradição oral é muito forte. Quase todos os halflings falam Comum para conversar com as pessoas nas terras onde vivem ou por onde estão viajando.
                </p>
            </>
    },
    {
        name: 'Tiefling',
        value: 'tiefling',
        details:
            <>
                <h1><strong>Características dos Tieflings</strong></h1>
                <p>
                    Tieflings compartilham certas características raciais.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seu valor de Inteligência aumenta em 1, e seu valor de Carisma aumenta em 2.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Tieflings amadurecem na mesma taxa que os humanos, mas vivem alguns anos a mais.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Tieflings podem não ter uma tendência inata ao mal, mas muitos deles acabam lá. Mal ou não, uma natureza independente inclina muitos tieflings em direção a um alinhamento caótico.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Tieflings são aproximadamente do mesmo tamanho e construção que os humanos. Seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Visão no Escuro:</strong></h2>
                <p>
                    Graças à sua herança infernal, você tem visão superior em condições de escuridão e penumbra. Você pode ver na penumbra a até 18 metros de você como se fosse luz plena, e na escuridão como se fosse penumbra. Você não consegue discernir cores na escuridão, apenas tons de cinza.
                </p>
                <h2><strong>Resistência Infernal:</strong></h2>
                <p>
                    Você tem resistência ao dano de fogo.
                </p>
                <h2><strong>Legado Infernal:</strong></h2>
                <p>
                    Você conhece o truque thaumaturgia. Quando você atinge o 3º nível, você pode lançar a magia represália infernal uma vez com este traço como uma magia de 2º nível, e recupera a capacidade de fazê-lo quando terminar um descanso longo. Quando você atinge o 5º nível, você pode lançar a magia escuridão uma vez com este traço e recupera a capacidade de fazê-lo quando terminar um descanso longo. Carisma é sua habilidade de conjuração para essas magias.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e Infernal.
                </p>
            </>
    },
    {
        name: 'Humano',
        value: 'human',
        details:
            <>
                <h1><strong>Características dos Humanos</strong></h1>
                <p>
                    É difícil fazer generalizações sobre os humanos, mas seu personagem humano possui essas características.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Seus valores de habilidade aumentam cada um em 1.
                </p>
                <h2><strong>Idade:</strong></h2>
                <p>
                    Os humanos atingem a idade adulta no final da adolescência e vivem menos de um século.
                </p>
                <h2><strong>Alinhamento:</strong></h2>
                <p>
                    Os humanos tendem a não ter um alinhamento específico. Os melhores e os piores são encontrados entre eles.
                </p>
                <h2><strong>Tamanho:</strong></h2>
                <p>
                    Os humanos variam amplamente em altura e constituição, desde pouco mais de 1,50 metro até mais de 1,80 metro de altura. Independentemente de sua posição nesse intervalo, seu tamanho é Médio.
                </p>
                <h2><strong>Velocidade:</strong></h2>
                <p>
                    Sua velocidade base de movimento é de 9 metros.
                </p>
                <h2><strong>Idiomas:</strong></h2>
                <p>
                    Você pode falar, ler e escrever em Comum e em um idioma extra de sua escolha. Os humanos geralmente aprendem as línguas de outros povos com os quais lidam, incluindo dialetos obscuros. Eles gostam de enriquecer sua fala com palavras emprestadas de outras línguas: maldições orcs, expressões musicais élficas, frases militares anãs, e assim por diante.
                </p>
                <h2><strong>Características Opcionais dos Humanos:</strong></h2>
                <p>
                    Essas características substituem a característica de Aumento de Habilidade dos humanos.
                </p>
                <h2><strong>Aumento de Habilidade:</strong></h2>
                <p>
                    Dois valores de habilidade diferentes de sua escolha aumentam em 1.
                </p>
                <h2><strong>Habilidades:</strong></h2>
                <p>
                    Você ganha proficiência em uma habilidade de sua escolha.
                </p>
                <h2><strong>Talento:</strong></h2>
                <p>
                    Você ganha um talento de sua escolha.
                </p>
            </>
    }
]

export default races