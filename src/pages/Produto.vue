<template>
  <q-page class="q-pa-md">
    <q-card v-if="produto" class="q-pa-md q-mx-auto" style="max-width: 600px">
      <q-img :src="produto.imagem" :alt="produto.titulo" height="300px" class="rounded-borders" />
      <q-card-section>
        <div class="text-h5 text-bold">{{ produto.titulo }}</div>
        <div class="text-subtitle2 q-mt-sm">{{ produto.descricao }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          icon="whatsapp"
          label="Pedir via WhatsApp"
          color="green"
          unelevated
          :href="`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${produto.titulo}`"
          target="_blank"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const produtos = [
  {
    id: '1',
    titulo: 'Kit Digital My Kitchen',
    descricao: 'Contém 10 papéis digitais para imprimir',
    imagem: 'https://cdn.awsli.com.br/600x450/2421/2421444/produto/233014007/kit-digital-my-kitchen-10-papeis-digitais-1fyk8lfcju.png'
  },
  {
    id: '2',
    titulo: 'Papel Digital My Kitchen 4',
    descricao: 'Alta resolução 300 DPI',
    imagem: 'https://cdn.awsli.com.br/600x450/2421/2421444/produto/233012513/papel-digital-my-kitchen-4-bb1jtxpi1n.png'
  },
  {
    id: '3',
    titulo: 'Papel Digital My Kitchen 5',
    descricao: 'Pronto para imprimir em A4',
    imagem: 'https://cdn.awsli.com.br/600x450/2421/2421444/produto/233012625/papel-digital-my-kitchen-5-nrsbbm1lxh.png'
  },
  {
    id: '4',
    titulo: 'Papel Digital My Kitchen 6',
    descricao: 'Ideal para scrapbooking artesanal',
    imagem: 'https://cdn.awsli.com.br/600x450/2421/2421444/produto/233012759/papel-digital-my-kitchen-6-9pr4zyzckv.png'
  }
]

const produto = produtos.find(p => p.id === route.params.id)
</script>