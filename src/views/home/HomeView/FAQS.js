import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
}))

const FAQS = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
        >
          Готовые ответы
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Подход к разработке
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Пишешь свое или используешь готовые решения?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Да я часто использую готовые решения, приоритетной стратегией выбрал максимально качественное использование того,
                  что уже открыто, и туда относятся: фрейворки, компоненты, концепции, алгоритмы, эффективные синтаксическе конструкции.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Какой у тебя опыт в разработке?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Я учился на программиста и с 2011 года так или иначе свзан с программированием, в 2015 после выпуска я работал в различных веб студиях.
                  Думаю я был примерно в 10 различных командах

                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Важен ли опыт в программировании?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Да но тут есть большое но, необходим опыт именно в разном стеке, в разных командах.
                  Опыт в прорграммировании в целом влияет на организацию рабочего процесса
                </Typography>
              </dd>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Стек
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Какой стек технологий ты исполользуешь?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  В начале я работал пару лет с PHP движками, такими как Wordpress, Joomla. (в студии)
                  Далее я познакомился с компонентным подходом в разработке, но реализовывали мы (ребята в студии) его через Gulp и Pug по методологии БЕМ
                  Затем оставив Gulp и изучая, закрепляя на коммерческих проектах поочередно то Vue то React прошло несколько лет.
                  И вот теперь я пишу и проектирую логику на NodeJs
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Куда ты движешся?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Я так же вижу себя в веб разработке, но хочу поднять ее на новый уровень, и векторов направлению к тому очень много. Исскуственный интелект, блокчейн. Спасибо за то что прочитали )
                </Typography>
              </dd>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

FAQS.propTypes = {
  className: PropTypes.string
}

export default FAQS
