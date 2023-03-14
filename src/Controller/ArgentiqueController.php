<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Photo;

class ArgentiqueController extends AbstractController
{
    #[Route('/argentique', name: 'app_argentique')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $photos = $doctrine->getRepository(Photo::class)->findAll(); //une variable dans laquelle on a toute la table
        return $this->render('argentique/index.html.twig', [
            'photos' => $photos
        ]);
    }
}
