<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Role::factory()->create([
            'id' => 0,
            'name' => 'superadmin',
        ]);
        Role::factory()->create([
            'id' => 1,
            'name' => 'user',
        ]);

        User::factory()->create([
            'email' => 'billy.bpm03@gmail.com',
            'role_id' => 0,
        ]);
    }
}
