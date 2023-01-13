<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Photo;

class AccueilController extends AbstractController
{
    #[Route('/accueil', name: 'app_accueil')]
    public function index(ManagerRegistry $doctrine): Response
    {

        $photos = $doctrine->getRepository(Photo::class)->findAll(); //une variable dans laquelle on a toute la table

        return $this->render('accueil/index.html.twig', [
            'photos' => $photos
        ]);
    }

    
}
