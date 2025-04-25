<template>
  <q-page class="bg-white text-dark">
    <!-- Header -->
    <div class="bg-grey-2 q-pa-md row justify-between items-center">
      <div class="text-h5 text-bold">My Memories Crafts</div>
      <div class="row q-gutter">
        <q-btn flat label="Início" to="/" />
        <q-btn flat label="Coleções" to="admin" />
        <q-btn flat label="My Kitchen" />
        <q-btn flat label="Contato" />
      </div>
    </div>

    <!-- Hero Section -->
    <div class="bg-grey-3 q-pa-xl text-center">
      <h1 class="text-h4 q-mb-sm">My Kitchen</h1>
      <p class="text-subtitle1">Uma coleção cheia de charme e aconchego para sua cozinha</p>
    </div>

    <!-- Products -->
    <div class="q-pa-lg">
      <div class="row q-col-gutter-lg">
        <div
          v-for="produto in produtos"
          :key="produto.id"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card flat bordered class="q-pa-sm">
            <q-img :src="produto.imagem" :alt="produto.titulo" style="border-radius: 4px" />

            <q-card-section>
              <div class="text-h6">{{ produto.titulo }}</div>
              <div class="text-subtitle2 text-grey-7">{{ produto.descricao }}</div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn
                icon="whatsapp"
                label="Pedir no WhatsApp"
                color="pink-5"
                flat
                :href="`https://wa.me/14706036883?text=Olá! Gostaria de saber mais sobre a My Kitchen Decor`"
                target="_blank"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-grey-2 text-center q-pa-md">
      <p class="text-subtitle2 q-mb-none">
        &copy; 2025 My Memories Crafts. Todos os direitos reservados.
      </p>
    </div>
  </q-page>
</template>

<script setup>
// Importe as imagens da pasta assets
import kitDigital from 'src/assets/kit-digital.png.jpeg'
import papel4 from 'src/assets/211.jpeg'
import papel5 from 'src/assets/212.jpeg'
import papel6 from 'src/assets/213.jpeg'

const produtos = [
  {
    id: '1',
    titulo: 'Kit Digital My Kitchen',
    descricao: 'Contém 10 papéis digitais para imprimir',
    imagem: kitDigital
  },
  {
    id: '2',
    titulo: 'Papel Digital My Kitchen 4',
    descricao: 'Alta resolução 300 DPI',
    imagem: papel4
  },
  {
    id: '3',
    titulo: 'Papel Digital My Kitchen 5',
    descricao: 'Pronto para imprimir em A4',
    imagem: papel5
  },
  {
    id: '4',
    titulo: 'Papel Digital My Kitchen 6',
    descricao: 'Ideal para scrapbooking artesanal',
    imagem: papel6
  }
]
</script>
