<?php

namespace App\Application\Services;

class AbstractService
{
    public function __construct(protected $repository = null)
}
