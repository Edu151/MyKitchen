<template>
  <q-page padding>
    <div class="text-h5 q-mb-md">Produtos My Kitchen</div>

    <q-list bordered separator padding>
      <q-item
        v-for="produto in produtos"
        :key="produto.id"
        clickable
        @click="abrirDetalhe(produto.id)"
      >
        <q-item-section avatar>
          <q-img :src="produto.imagem" :alt="produto.titulo" style="width: 150px; height: 150px" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">{{ produto.titulo }}</q-item-label>
          <q-item-label caption style="white-space: pre-line;">{{ produto.descricao }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import facas from 'src/assets/223.jpeg'
import protetor from 'src/assets/protetor.jpeg'

const router = useRouter()

const produtos = [
  {
    id: '6',
    titulo: 'facas',
    descricao: '🍴✨ Kit de Facas Pioneer Woman – 3 Peças\n' +
      '\n' +
      'Transforme sua cozinha com esse conjunto de facas Pioneer Woman cheio de estilo e qualidade!\n' +
      '\n' +
      'Com estampas florais incríveis e cabo anatômico, essas facas não são só funcionais, mas também decorativas 💐\n' +
      '🔪 Lâminas afiadas e duráveis\n' +
      '🌼 Design exclusivo e super charmoso\n' +
      '📦 Conjunto com 3 peças\n' +
      '\n' +
      'Ideal para quem ama cozinhar com beleza e praticidade!\n' +
      '\n' +
      '💰 Apenas R$100,00 o kit\n' +
      'Produto importado e com acabamento impecável!\n' +
      '📲 Garanta já o seu!\n',
    imagem: facas
  },

  {
    id: '7',
    titulo: 'Protetor',
    descricao: '☀ PROTEÇÃO POTENTE PARA SUA PELE!\n' +
      '🧴 Protetor Solar Neutrogena Beach Defense FPS 70\n' +
      '💰 Apenas R$10,00 cada\n' +
      '\n' +
      'Quer curtir o sol com segurança? O Neutrogena Beach Defense oferece alta proteção contra os raios UVA/UVB, é resistente à água por até 80 minutos e tem textura leve, ideal para pele exposta ao sol e à água.\n' +
      '\n' +
      '✔ FPS 70 – proteção poderosa\n' +
      '✔ Tecnologia Helioplex\n' +
      '✔ Fórmula leve e de rápida absorção\n' +
      '✔ Ideal para praia, piscina e dia a dia\n' +
      '✔ Embalagem prática com 29 mL – cabe em qualquer bolsa!\n' +
      '\n' +
      '🌞 Cuide da sua pele com qualidade e economia. Por apenas R$10,00 cada, garanta o seu antes que acabe!',
    imagem:  protetor
  }
]

function abrirDetalhe(id) {
  router.push(`/produtos/${id}`)
}
</script>
